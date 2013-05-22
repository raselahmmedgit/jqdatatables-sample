using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RnD.DataTableSample.ViewModels
{
    public class MasterDetailsViewModel
    {
        public string CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductPrice { get; set; }
    }
}