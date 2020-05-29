using Answers.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Answers.Controllers
{
    public class ContactController : Controller
    {

        [Route("/contact")]
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View(new PageModel()
            {
                PageName = "contact",
                ImgSrc = "https://compass-ssl.xbox.com/assets/c8/87/c887b371-3697-427f-99dd-39e0aaeecd00.jpg?n=Minecraft-Dungeons_Page-Hero-1084_1920x720_02.jpg",
                Heading = "Minecraft Dungeons",
                SubHeading = "Unite. Fight. Survive."
            });
        }
    }
}