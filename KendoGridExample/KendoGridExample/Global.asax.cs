// ***********************************************************************
// Assembly         : KendoGridExample
// Author           : Ben Blackmore
// Created          : 05-02-2014
//
// Last Modified By : Ben Blackmore
// Last Modified On : 05-02-2014
// ***********************************************************************
// <copyright file="Global.asax.cs" company="Greater Heights Ltd">
//     Copyright (c) Greater Heights Ltd. All rights reserved.
// </copyright>
// <summary>The web api application.</summary>
// ***********************************************************************

namespace KendoGridExample
{
    using System.Diagnostics.CodeAnalysis;
    using System.Web.Http;
    using System.Web.Mvc;
    using System.Web.Optimization;
    using System.Web.Routing;

    using KendoGridExample.Context;

    /// <summary>
    /// The web api application.
    /// </summary>
    [SuppressMessage("StyleCop.CSharp.DocumentationRules", "SA1650:ElementDocumentationMustBeSpelledCorrectly", Justification = "Reviewed. Suppression is OK here.")]
    public class WebApiApplication : System.Web.HttpApplication
    {
        #region Methods

        /// <summary>
        /// The application_ start.
        /// </summary>
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            //Ensure the database is created if it does not exist
            using (var context = new UsersContext())
            {
                context.Database.Initialize(true);
            }
        }

        #endregion
    }
}