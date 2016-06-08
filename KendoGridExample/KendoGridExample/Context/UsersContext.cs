using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KendoGridExample.Context
{
    using System.Data.Entity;

    using KendoGridExample.Models;

    public class UsersContext : DbContext 
    {
        public UsersContext()
            : base("name=Example")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new UsersMap());
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<User> Users { get; set; }
    }
}