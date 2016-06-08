// ***********************************************************************
// Assembly         : KendoGridExample
// Author           : Ben Blackmore
// Created          : 05-02-2014
//
// Last Modified By : Ben Blackmore
// Last Modified On : 05-02-2014
// ***********************************************************************
// <copyright file="HotTowelRouteConfig.cs" company="Greater Heights Ltd">
//     Copyright (c) Greater Heights Ltd. All rights reserved.
// </copyright>
// <summary>Inserts the HotTowel SPA sample view controller to the front of all MVC routes
//  so that the HotTowel SPA sample becomes the default page.</summary>
// ***********************************************************************

[assembly:
    WebActivator.PreApplicationStartMethod(typeof(KendoGridExample.App_Start.HotTowelRouteConfig), 
        "RegisterHotTowelPreStart", Order = 2)]

namespace KendoGridExample.App_Start
{
    /// <summary>
    /// Inserts the HotTowel SPA sample view controller to the front of all MVC routes
    /// so that the HotTowel SPA sample becomes the default page.
    /// </summary>
    /// <remarks>This class is discovered and run during startup
    /// http://blogs.msdn.com/b/davidebb/archive/2010/10/11/light-up-your-nupacks-with-startup-code-and-webactivator.aspx</remarks>
    public static class HotTowelRouteConfig
    {
        #region Public Methods and Operators

        /// <summary>
        /// The register hot towel pre start.
        /// </summary>
        public static void RegisterHotTowelPreStart()
        {
            // Preempt standard default MVC page routing to go to HotTowel Sample
            // System.Web.Routing.RouteTable.Routes.MapRoute(
            // name: "HotTowelMvc",
            // url: "{controller}/{action}/{id}",
            // defaults: new
            // {
            // controller = "HotTowel",
            // action = "Index",
            // id = UrlParameter.Optional
            // }
            // );
        }

        #endregion
    }
}