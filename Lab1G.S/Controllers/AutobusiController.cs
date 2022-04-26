using Lab1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Lab1.Controllers


{
    [Route("api/[controller]")]
    [ApiController]
    public class AutobusiController : ControllerBase
    {
        private static List<Autobusi> autobusat = new List<Autobusi>
        {
                new Autobusi
                {
                    Id = 1,
                    Number = 01,
                    Capacity =  60,
                    FuelCapacity = 430,
                    GarazhaId = 10,
                    KompaniaId= 1,
                    PompaId = 1
                },
                 new Autobusi
                 {

                    Id = 2,
                    Number=01,
                    Capacity =45 ,  
                    FuelCapacity = 420,
                    GarazhaId = 10,
                    KompaniaId= 1,
                    PompaId = 2
                 }

        };


        [HttpGet]
        public async Task<ActionResult<List<Autobusi>>> Get()
        {

            return Ok(autobusat);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Autobusi>> Get(int id)
        {
            var autobusi = autobusat.Find(h => h.Id == id);
            if (autobusi == null) 
                return BadRequest("Autobusi nek gjendet.");

            return Ok(autobusi);
        }

        //Create a Autobusi
        [HttpPost]
        public async Task<ActionResult<List<Autobusi>>> AddAutobusi(Autobusi autobusi)
        {
            autobusat.Add(autobusi);
            return Ok(autobusat);
        }

      //Update Autobusi
        [HttpPut]
        public async Task<ActionResult<List<Autobusi>>> UpdateAutobusi(Autobusi request)

        {
            var Autobusi = autobusat.Find(h => h.Id == request.Id);
            if (Autobusi == null)
                return BadRequest("Autobusi nuk ekziston...");

            Autobusi.Number = request.Number;
            Autobusi.Capacity = request.Capacity;   
            Autobusi.FuelCapacity = request.FuelCapacity;
            Autobusi.GarazhaId = request.GarazhaId;
            Autobusi.KompaniaId = request.KompaniaId;
            Autobusi.PompaId = request.PompaId;

           return Ok(autobusat);
        }
        //Delete bus


        [HttpDelete("{id}")]
        public async Task<ActionResult<Autobusi>> Delete(int id)
        {
            var autobusi = autobusat.Find(h => h.Id == id);
            if (autobusi == null)
                return BadRequest("Autobusi nek gjendet.");

            autobusat.Remove(autobusi);

            return Ok(autobusi);
        }






    }
}
