// ***********************************************************************
// Assembly         : KendoGridExample
// Author           : Ben Blackmore
// Created          : 05-02-2014
//
// Last Modified By : Ben Blackmore
// Last Modified On : 05-02-2014
// ***********************************************************************
// <copyright file="BundleConfig.cs" company="Greater Heights Ltd">
//     Copyright (c) Greater Heights Ltd. All rights reserved.
// </copyright>
// <summary>The bundle config.</summary>
// ***********************************************************************

namespace KendoGridExample
{
    using System;
    using System.Web.Optimization;

    /// <summary>
    /// The bundle config.
    /// </summary>
    public class BundleConfig
    {
        #region Public Methods and Operators

        /// <summary>
        /// The add default ignore patterns.
        /// </summary>
        /// <param name="ignoreList">The ignore list.</param>
        /// <exception cref="System.ArgumentNullException">ignoreList</exception>
        /// <exception cref="ArgumentNullException">Throws if the ignore list is null</exception>
        public static void AddDefaultIgnorePatterns(IgnoreList ignoreList)
        {
            if (ignoreList == null)
            {
                throw new ArgumentNullException("ignoreList");
            }

            ignoreList.Ignore("*.intellisense.js");
            ignoreList.Ignore("*-vsdoc.js");

            // ignoreList.Ignore("*.debug.js", OptimizationMode.WhenEnabled);
            // ignoreList.Ignore("*.min.js", OptimizationMode.WhenDisabled);
            // ignoreList.Ignore("*.min.css", OptimizationMode.WhenDisabled);
        }

        /// <summary>
        /// The register bundles.
        /// </summary>
        /// <param name="bundles">The bundles.</param>
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.IgnoreList.Clear();
            AddDefaultIgnorePatterns(bundles.IgnoreList);

            bundles.Add(
                new ScriptBundle("~/scripts/vendor").Include("~/scripts/jquery-{version}.js")
                    .Include("~/scripts/knockout-{version}.debug.js")
                    .Include("~/scripts/toastr.js")
                    .Include("~/scripts/Q.js")
                    .Include("~/scripts/breeze.debug.js")
                    .Include("~/scripts/bootstrap.js")
                    .Include("~/scripts/moment.js")
                    .Include("~/scripts/kendo/2014.1.318/kendo.web.min.js")
                    .Include("~/Scripts/kendo/2014.1.318/cultures/kendo.culture.en-GB.min.js")
                    .Include("~/scripts/constants/*.js"));

            bundles.Add(
                new StyleBundle("~/Content/css").Include("~/Content/ie10mobile.css")
                    .Include("~/Content/bootstrap.css")
                    .Include("~/Content/bootstrap-responsive.css")
                    .Include("~/Content/durandal.css")
                    .Include("~/Content/toastr.css")
                    .Include("~/Content/app.css"));

            bundles.Add(
                new StyleBundle("~/content/kendo/20141318/bundle").Include(
                    "~/Content/kendo/20141318/kendo.bootstrap.min.css")
                    .Include("~/Content/kendo/20141318/kendo.common-bootstrap.min.css"));
        }

        #endregion
    }
}