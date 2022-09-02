using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Starter.Data.Entities;
using Starter.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Starter.Data
{
    public class StarterDbContext : IdentityDbContext
    {
        public StarterDbContext(DbContextOptions<StarterDbContext> options
            ) : base(options)
        {
          
        }

        public virtual DbSet<Country> Country { get; set; }

        public virtual DbSet<FreeAgency> FreeAgency { get; set; }

        public virtual DbSet<ApplicationUser> ApplicationUsers { get; set; }

        public virtual DbSet<Roles> Roles { get; set; }

        public virtual DbSet<UserRoles> UserRoles { get; set; }

        public virtual DbSet<Invitations> Invitations { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            SetUpPks(builder);
        }

        private static void SetUpPks(ModelBuilder builder)
        {
            builder.Entity<UserRoles>()
                .HasKey(a => new { a.RoleId, a.UserId });
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer
                ("Server=DESKTOP-DIJESC4\\SQLEXPRESS01;Database=StarterDB_local;Trusted_Connection=True;MultipleActiveResultSets=true;");
            base.OnConfiguring(optionsBuilder);
        }

    }
}
