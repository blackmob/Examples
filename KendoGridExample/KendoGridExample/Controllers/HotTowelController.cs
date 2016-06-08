// ***********************************************************************
// Assembly         : KendoGridExample
// Author           : Ben Blackmore
// Created          : 05-02-2014
//
// Last Modified By : Ben Blackmore
// Last Modified On : 05-02-2014
// ***********************************************************************
// <copyright file="HotTowelController.cs" company="Greater Heights Ltd">
//     Copyright (c) Greater Heights Ltd. All rights reserved.
// </copyright>
// <summary></summary>
// ***********************************************************************

namespace KendoGridExample.Controllers
{
    using System.Web.Mvc;

    /// <summary>
    /// The hot towel controller.
    /// </summary>
    public class HotTowelController : Controller
    {
        // GET: /HotTowel/
        #region Public Methods and Operators

        /// <summary>
        /// The index.
        /// </summary>
        /// <returns>The <see cref="ActionResult" />.</returns>
        public ActionResult Index()
        {
            return this.View();
        }

        #endregion
    }
}