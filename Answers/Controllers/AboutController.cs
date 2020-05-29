using Answers.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Answers.Controllers
{
    public class AboutController : Controller
    {
        [Route("/about")]
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View(new PageModel()
            {
                PageName = "about",
                ImgSrc = "https://compass-ssl.xbox.com/assets/e9/4e/e94eb94f-cbc8-4ade-b1be-78f3ec579782.jpg?n=DOOM-Eternal_Page-Hero-1084_1920x720_02.jpg",
                Heading = "DOOM Eternal",
                SubHeading = "Raze Hell"
            });
        }
    }
}