using Answers.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Answers.Controllers
{
    public class DataController : ApiController
    {
        [HttpGet]
        [Route("api/data/{id}")]
        public PageModel Get(string id)
        {
            switch(id)
            {
                case "home":
                    return new PageModel()
                    {
                        PageName = "home",
                        ImgSrc = "https://compass-ssl.xbox.com/assets/81/f6/81f61167-929d-4bbf-9912-b03868379904.jpg?n=RDR2-Launch_Superhero-1084_1920x720.jpg",
                        Heading = "Red Dead Redemption 2",
                        SubHeading = "Play it on console with Xbox Game Pass"
                    };
                case "about":
                    return new PageModel()
                    {
                        PageName = "about",
                        ImgSrc = "https://compass-ssl.xbox.com/assets/e9/4e/e94eb94f-cbc8-4ade-b1be-78f3ec579782.jpg?n=DOOM-Eternal_Page-Hero-1084_1920x720_02.jpg",
                        Heading = "DOOM Eternal",
                        SubHeading = "Raze Hell"
                    };
                case "contact":
                    return new PageModel()
                    {
                        PageName = "contact",
                        ImgSrc = "https://compass-ssl.xbox.com/assets/c8/87/c887b371-3697-427f-99dd-39e0aaeecd00.jpg?n=Minecraft-Dungeons_Page-Hero-1084_1920x720_02.jpg",
                        Heading = "Minecraft Dungeons",
                        SubHeading = "Unite. Fight. Survive."
                    };
                default:
                    return new PageModel();
            }
        }
    }
}
