using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Answers.Models
{
    public class PageModel
    {
        [JsonProperty("pageName")]
        public string PageName { get; set; }

        [JsonProperty("imgSrc")]
        public string ImgSrc { get; set; }

        [JsonProperty("subHeading")]
        public string SubHeading { get; set; }

        [JsonProperty("heading")]
        public string Heading { get; set; }
    }
}