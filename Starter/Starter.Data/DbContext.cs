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
       // private string _connectionString = "Server=DESKTOP-DIJESC4\\SQLEXPRESS01;Database=StarterDB_local;User Id=evaldas;Password=1234;MultipleActiveResultSets=true;";

        public StarterDbContext(DbContextOptions<StarterDbContext> options
            ) : base(options)
        {
          
        }


        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{

        //    if (!optionsBuilder.IsConfigured)
        //    {
        //        optionsBuilder.UseSqlServer(_connectionString);
        //    }
        // }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);

        //}

        //  public virtual DbSet<Port> Port { get; set; }

        public virtual DbSet<Country> Country { get; set; }
        public virtual DbSet<FreeAgency> FreeAgency { get; set; }
        public virtual DbSet<ApplicationUser> ApplicationUsers { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //SetUpFks(builder);
        }

        private static void SetUpFks(ModelBuilder builder)
        {
            //builder.Entity<FreeAgency>()
            //    .HasOne(e => e.Country)
            //    .WithOne()
            //    .HasForeignKey<Country>();
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer
                ("Server=DESKTOP-DIJESC4\\SQLEXPRESS01;Database=StarterDB_local;Trusted_Connection=True;MultipleActiveResultSets=true;");
            base.OnConfiguring(optionsBuilder);
        }

    }
}
