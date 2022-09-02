using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Starter.Data;
using Starter.Data.Entities;
using Starter.Data.Models;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Starter.Web.Api.Dynamic
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;
        private readonly ApplicationSettings _appSettings;
        private StarterDbContext _context;

        public ApplicationUserController(UserManager<ApplicationUser> userManager,
              SignInManager<ApplicationUser> signInManager, IOptions<ApplicationSettings> appSettings, 
              StarterDbContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _appSettings = appSettings.Value;
            _context = context;
        }

        [HttpPost]
        [Route("Register")]
        //POST : /api/ApplicationUser/Register
        public async Task<IActionResult> PostApplicationUser(ApplicationUserModel model) 
        {

            var applicationUser = new ApplicationUser()
            {
                UserName = model.UserName,
                Email = model.Email,
                FullName = model.FullName,
         
            };

            var result = await _userManager.CreateAsync(applicationUser, model.Password);

            if (result.Succeeded)
            {
                var user = await _userManager.FindByNameAsync(model.UserName);
                var role = new UserRoles()
                {
                    RoleId = 1,
                    UserId = user.Id
                };
                _context.UserRoles.Add(role);
                await _context.SaveChangesAsync();

                return Ok(result);

            }

            return BadRequest(result);
        }

        [HttpPost]
        [Route("Login")]
        //POST : /api/ApplicationUser/Login
        //authenticated user with Jwt
        public async Task<IActionResult> Login(LoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);

            if (user.isDeleted)
            {
                return BadRequest(new { message = "User Deleted" });
            }
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID", user.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(52),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)),
                        SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);

                var userRolesIds = await _context.UserRoles.Where(a => a.UserId == user.Id).Select(a => a.RoleId).ToListAsync();

                var roles = await _context.Roles.Where(a => userRolesIds.Contains(a.Id)).ToListAsync();

                return Ok(new 
                {
                   Id = user.Id,
                   UserName = user.UserName,
                   Email = user.Email,
                   FullName = user.FullName,
                   isPlayer = roles.Any(a => a.Code == "PLAYER"),
                   isCaptain = roles.Any(a => a.Code == "CAPTAIN"),
                   Token = token

            });
            }
            else
                return BadRequest(new { message = "incorrect credentials" });
        }


        [HttpPost]
        [Route("Delete")]
        //POST : /api/ApplicationUser/Register
        public async Task<IActionResult> DeleteApplicationUser([FromBody] IdStringModel model)
        {

            var user = await _context.ApplicationUsers.FirstOrDefaultAsync(a => a.Id == model.Id);

            user.isDeleted = true;

            _context.ApplicationUsers.Update(user);
            await _context.SaveChangesAsync();

           return Ok(user);

  
        }

    }
}
