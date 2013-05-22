using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RnD.DataTableSample.Controllers
{
    public class ReportController : Controller
    {
        //
        // GET: /Report/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult MasterDetails()
        {
            int categoryId = 1;

            //(../../ShampanReports/AspNetForms/GoodsReceiveByIdPage.aspx?gRId=1)
            return Redirect("../AspForms/MasterDetails.aspx?catId=" + categoryId);
            //return View();
        }
    }
}
