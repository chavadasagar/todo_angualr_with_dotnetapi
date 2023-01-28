using Microsoft.AspNetCore.Mvc;

namespace todoapi.Controllers
{
  [Route("test")]
  [ApiController]
  public class TestController : ControllerBase
  {
    [Route("testing")]
    [HttpPost]
    public async Task<string> testing()
    {
      try
      {
        var allfile = Request.Form.Files;
        var filePath = Path.GetTempFileName();

        using (var stream = System.IO.File.Create(@"F:\"))
        {
          // The formFile is the method parameter which type is IFormFile
          // Saves the files to the local file system using a file name generated by the app.
          await allfile[0].CopyToAsync(stream);
        }
        return "sasas";
      }
      catch (Exception e)
      {
        throw;
      }
    }
  }
}
