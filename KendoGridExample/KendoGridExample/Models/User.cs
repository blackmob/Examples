// ***********************************************************************
// Assembly         : KendoGridExample
// Author           : Ben Blackmore
// Created          : 05-02-2014
//
// Last Modified By : Ben Blackmore
// Last Modified On : 05-02-2014
// ***********************************************************************
// <copyright file="User.cs" company="Greater Heights Ltd">
//     Copyright (c) Greater Heights Ltd. All rights reserved.
// </copyright>
// <summary>The user.</summary>
// ***********************************************************************

namespace KendoGridExample.Models
{
    using System.ComponentModel.DataAnnotations;

    /// <summary>
    /// The user.
    /// </summary>
    public class User
    {
        #region Public Properties

        /// <summary>
        /// Gets or sets the first name.
        /// </summary>
        /// <value>The first name.</value>
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or sets the id.
        /// </summary>
        /// <value>The identifier.</value>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the surname.
        /// </summary>
        /// <value>The surname.</value>
        public string Surname { get; set; }

        #endregion
    }
}