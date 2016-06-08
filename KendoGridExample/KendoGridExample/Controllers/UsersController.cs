// ***********************************************************************
// Assembly         : KendoGridExample
// Author           : Ben Blackmore
// Created          : 05-06-2014
//
// Last Modified By : Ben Blackmore
// Last Modified On : 05-06-2014
// ***********************************************************************
// <copyright file="UsersController.cs" company="Greater Heights Ltd">
//     Copyright (c) Greater Heights Ltd. All rights reserved.
// </copyright>
// <summary></summary>
// ***********************************************************************
namespace KendoGridExample.Controllers
{
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Linq;
    using System.Net;
    using System.Threading.Tasks;
    using System.Web.Http;
    using System.Web.Http.OData;

    using KendoGridExample.Context;
    using KendoGridExample.Models;

    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using KendoGridExample.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<User>("Users");
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */

    /// <summary>
    /// Class UsersController.
    /// </summary>
    public class UsersController : ODataController
    {
        /// <summary>
        /// The database
        /// </summary>
        private readonly UsersContext db = new UsersContext();

        /// <summary>
        /// Deletes the specified key.
        /// </summary>
        /// <param name="key">The key.</param>
        /// <returns>Task&lt;IHttpActionResult&gt;.</returns>
        public async Task<IHttpActionResult> Delete([FromODataUri] int key)
        {
            var user = await this.db.Users.FindAsync(key);
            if (user == null)
            {
                return this.NotFound();
            }

            this.db.Users.Remove(user);
            await this.db.SaveChangesAsync();

            return this.StatusCode(HttpStatusCode.NoContent);
        }

        /// <summary>
        /// Gets the user.
        /// </summary>
        /// <param name="key">The key.</param>
        /// <returns>SingleResult&lt;User&gt;.</returns>
        [Queryable]
        public SingleResult<User> GetUser([FromODataUri] int key)
        {
            return SingleResult.Create(this.db.Users.Where(user => user.Id == key));
        }

        /// <summary>
        /// Gets the users.
        /// </summary>
        /// <returns>IQueryable&lt;User&gt;.</returns>
        [Queryable]
        public IQueryable<User> GetUsers()
        {
            return this.db.Users;
        }

        /// <summary>
        /// Patches the specified key.
        /// </summary>
        /// <param name="key">The key.</param>
        /// <param name="patch">The patch.</param>
        /// <returns>Task&lt;IHttpActionResult&gt;.</returns>
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] int key, Delta<User> patch)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            var user = await this.db.Users.FindAsync(key);
            if (user == null)
            {
                return this.NotFound();
            }

            patch.Patch(user);

            try
            {
                await this.db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!this.UserExists(key))
                {
                    return this.NotFound();
                }

                throw;
            }

            return this.Updated(user);
        }

        /// <summary>
        /// Posts the specified user.
        /// </summary>
        /// <param name="user">The user.</param>
        /// <returns>Task&lt;IHttpActionResult&gt;.</returns>
        public async Task<IHttpActionResult> Post(User user)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            this.db.Users.Add(user);
            await this.db.SaveChangesAsync();

            return this.Created(user);
        }

        /// <summary>
        /// Puts the specified key.
        /// </summary>
        /// <param name="key">The key.</param>
        /// <param name="user">The user.</param>
        /// <returns>Task&lt;IHttpActionResult&gt;.</returns>
        public async Task<IHttpActionResult> Put([FromODataUri] int key, User user)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            if (key != user.Id)
            {
                return this.BadRequest();
            }

            this.db.Entry(user).State = EntityState.Modified;

            try
            {
                await this.db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!this.UserExists(key))
                {
                    return this.NotFound();
                }

                throw;
            }

            return this.Updated(user);
        }

        /// <summary>
        /// Releases the unmanaged resources that are used by the object and, optionally, releases the managed resources.
        /// </summary>
        /// <param name="disposing">true to release both managed and unmanaged resources; false to release only unmanaged resources.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                this.db.Dispose();
            }

            base.Dispose(disposing);
        }

        /// <summary>
        /// Users the exists.
        /// </summary>
        /// <param name="key">The key.</param>
        /// <returns><c>true</c> if XXXX, <c>false</c> otherwise.</returns>
        private bool UserExists(int key)
        {
            return this.db.Users.Count(e => e.Id == key) > 0;
        }
    }
}