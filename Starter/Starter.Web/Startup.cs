using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
//using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Starter.Core.Mapping;
using Starter.Core.Services;
using Starter.Data;
using Starter.Services;

namespace Starter.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

            var mapSetUp = new AutoMapSetup();
            mapSetUp.Setup();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
          //  var connectionString = Configuration.GetConnectionString("DefaultConnection");

            //services.AddDbContext<EdgeDataContextTransient>(options =>
            //{
            //    options.UseSqlServer(connectionString).EnableSensitiveDataLogging();
            //    options.ConfigureWarnings(warnings => warnings.Default(WarningBehavior.Ignore)
            //        .Ignore(30000)); // Ignore model column validation warnings as we are not using mirgrations this shouldn't matter 

            //    // Register the entity sets needed by OpenIddict.
            //    options.UseOpenIddict();
            //}, ServiceLifetime.Transient);

            var connectionString = Configuration.GetConnectionString("DefaultConnection");

           // services.AddDbContext<StarterDbContext>(options => options.UseSqlServer(connectionString));

            //services.AddDbContext<StarterDbContext>(options => options.UseSqlServer(connectionString,
            //    providerOptions => providerOptions.EnableRetryOnFailure()));


            // services.AddDbContext<StarterDbContext>(options =>
            //{
            //    options.UseSqlServer(connectionString).EnableSensitiveDataLogging();
            //    options.ConfigureWarnings(warnings => warnings.Default(WarningBehavior.Ignore)
            //           .Ignore(30000)); // Ignore model column validation warnings as we are not using mirgrations this shouldn't matter 
            //    options.ConfigureWarnings(warnings => warnings
            //            .Ignore(SqlServerEventId.SavepointsDisabledBecauseOfMARS)); // Ignore MARS save points 
            //    // Register the entity sets needed by OpenIddict.
            //   // options.UseOpenIddict();
            //});














            services.AddControllersWithViews();
            services.AddMvc(options => options.EnableEndpointRouting = false)
                .AddControllersAsServices();
            services.AddCors(o => o.AddPolicy("CorsPolicy", builder =>
            {
                builder
                .AllowAnyMethod()
                .AllowAnyHeader()
                .WithOrigins("http://localhost:4200");

            }));

            InjectionServices(services);

            // In production, the Angular files will be served from this directory
            //services.AddSpaStaticFiles(configuration =>
            //{
            //    configuration.RootPath = "ClientApp/dist";
            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, 
                              IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseStaticFiles();
            //if (!env.IsDevelopment())
            //{
            //   // app.UseSpaStaticFiles();
            //}

            app.UseRouting();

            //app.UseEndpoints(endpoints =>
            //{
            //    endpoints.MapControllerRoute(
            //        name: "default",
            //        pattern: "{controller}/{action=Index}/{id?}");
            //});

            app.UseMvc(routes =>
            {
                routes.MapRoute("default", "{controller=Home}/{action=Index}/{id?}");
            });

         

            //app.UseSpa(spa =>
            //{
            //    // To learn more about options for serving an Angular SPA from ASP.NET Core,
            //    // see https://go.microsoft.com/fwlink/?linkid=864501

            //    spa.Options.SourcePath = "ClientApp";

            //    if (env.IsDevelopment())
            //    {
            //        spa.UseAngularCliServer(npmScript: "start");
            //    }
            //});
        }


        private void InjectionServices(IServiceCollection services)
        {
            services.AddScoped<IFreeAgencyManagementService, FreeAgencyManagementService>();
            services.AddScoped<IExcelConvertService, ExcelConvertService>();
        }
    }
}
