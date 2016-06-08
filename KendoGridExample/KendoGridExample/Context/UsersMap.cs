// ***********************************************************************
// Assembly         : KendoGridExample
// Author           : Ben Blackmore
// Created          : 05-06-2014
//
// Last Modified By : Ben Blackmore
// Last Modified On : 05-06-2014
// ***********************************************************************
// <copyright file="UsersMap.cs" company="Greater Heights Ltd">
//     Copyright (c) Greater Heights Ltd. All rights reserved.
// </copyright>
// <summary></summary>
// ***********************************************************************
namespace KendoGridExample.Context
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.ModelConfiguration;

    using KendoGridExample.Models;

    /// <summary>
    /// Class UsersMap.
    /// </summary>
    public class UsersMap : EntityTypeConfiguration<User>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UsersMap"/> class.
        /// </summary>
        public UsersMap()
        {
            this.ToTable("User");
            this.HasKey(t => t.Id);
            this.Property(t => t.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            this.Property(t => t.FirstName).IsRequired().HasMaxLength(255).HasColumnName("FirstName");
            this.Property(t => t.Surname).IsRequired().HasMaxLength(255).HasColumnName("Surname");
        }
    }
}