using Answers.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Answers.Controllers
{
    public class HomeController : Controller
    {
        [Route("/")]
        public ActionResult Index()
        {
            return View(new PageModel()
            {
                PageName = "home",
                ImgSrc = "https://compass-ssl.xbox.com/assets/81/f6/81f61167-929d-4bbf-9912-b03868379904.jpg?n=RDR2-Launch_Superhero-1084_1920x720.jpg",
                Heading = "Red Dead Redemption 2",
                SubHeading = "Play it on console with Xbox Game Pass"
            });
        }
    }
}