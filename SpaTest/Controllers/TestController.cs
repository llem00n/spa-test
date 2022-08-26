using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SpaTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index()
        {
            return Ok("compost");
        }
    }
}
