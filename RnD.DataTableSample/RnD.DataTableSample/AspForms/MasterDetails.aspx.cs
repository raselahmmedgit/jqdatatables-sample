using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using RnD.DataTableSample.Models;

namespace RnD.DataTableSample.AspForms
{
    public partial class MasterDetails : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            AppDbContext _db = new AppDbContext();

            try
            {
                
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}