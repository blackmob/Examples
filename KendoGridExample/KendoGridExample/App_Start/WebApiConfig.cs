// ***********************************************************************
// Assembly         : KendoGridExample
// Author           : Ben Blackmore
// Created          : 05-02-2014
//
// Last Modified By : Ben Blackmore
// Last Modified On : 05-02-2014
// ***********************************************************************
// <copyright file="WebApiConfig.cs" company="Greater Heights Ltd">
//     Copyright (c) Greater Heights Ltd. All rights reserved.
// </copyright>
// <summary>The web api config.</summary>
// ***********************************************************************

namespace KendoGridExample
{
    using System.Web.Http;
    using System.Web.Http.OData.Builder;

    using KendoGridExample.Models;

    /// <summary>
    /// The web api config.
    /// </summary>
    public static class WebApiConfig
    {
        #region Public Methods and Operators

        /// <summary>
        /// The register.
        /// </summary>
        /// <param name="config">The config.</param>
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute("DefaultApi", "api/{controller}/{id}", new { id = RouteParameter.Optional });

            var builder = new ODataConventionModelBuilder();
            builder.EntitySet<User>("Users");
            builder.MaxDataServiceVersion = System.Version.Parse("2.0");
            builder.DataServiceVersion = System.Version.Parse("2.0");
            config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
        }

        #endregion
    }
}