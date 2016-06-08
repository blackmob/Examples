// ***********************************************************************
// Assembly         : KendoGridExample
// Author           : Ben Blackmore
// Created          : 05-02-2014
//
// Last Modified By : Ben Blackmore
// Last Modified On : 05-02-2014
// ***********************************************************************
// <copyright file="HotTowelConfig.cs" company="Greater Heights Ltd">
//     Copyright (c) Greater Heights Ltd. All rights reserved.
// </copyright>
// <summary>The hot towel config.</summary>
// ***********************************************************************

[assembly: WebActivator.PostApplicationStartMethod(typeof(KendoGridExample.App_Start.HotTowelConfig), "PreStart")]

namespace KendoGridExample.App_Start
{
    using System.Web.Optimization;

    /// <summary>
    /// The hot towel config.
    /// </summary>
    public static class HotTowelConfig
    {
        #region Public Methods and Operators

        /// <summary>
        /// The pre start.
        /// </summary>
        public static void PreStart()
        {
            // Add your start logic here
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        #endregion
    }
}