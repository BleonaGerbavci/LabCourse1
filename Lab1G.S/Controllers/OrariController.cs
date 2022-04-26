using Lab1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Lab1.Controllers


{
    [Route("api/[controller]")]
    [ApiController]
    public class OrariController : ControllerBase
    {
        private static List<Orari> oraret = new List<Orari>
        {
                new Orari
                {
                    Id = 1,
                   WeekDay = "E martë",
                   StartingHour = "8:00",
                   EndingHour = "19:00"
                    },
                 new Orari
                 {

                    Id = 2,
                   WeekDay = "E hënë",
                   StartingHour = "8:00",
                   EndingHour = "19:00"

                 },

        };


        [HttpGet]
        public async Task<ActionResult<List<Orari>>> Get()
        {

            return Ok(oraret);
        }
        //Get orari by id
        [HttpGet("{id}")]
        public async Task<ActionResult<Orari>> Get(int id)
        {
            var Orari = oraret.Find(h => h.Id == id);
            if (Orari == null)
                return BadRequest("Orari nuk ekziston...");

            return Ok(Orari);
        }


        //Create orari
        [HttpPost]
        public async Task<ActionResult<List<Orari>>> AddOrari(Orari orari)
        {
            oraret.Add(orari);
            return Ok(oraret);
        }

        //Update orari
        [HttpPut]
        public async Task<ActionResult<List<Orari>>> UpdateOrari(Orari request)

        { 
               var Orari = oraret.Find(h => h.Id == request.Id);
                   if (Orari == null)
                return BadRequest("Orari nuk ekziston...");

                   Orari.WeekDay = request.WeekDay;
            Orari.StartingHour = request.StartingHour;
            Orari.EndingHour = request.EndingHour;
              
             return Ok(oraret);
        }

        //Delete orari
        [HttpDelete("{id}")]
        public async Task<ActionResult<Orari>> Delete(int id)
        {
            var Orari = oraret.Find(h => h.Id == id);
            if (Orari == null)
                return BadRequest("Orari nuk ekziston...");

            oraret.Remove(Orari);

            return Ok(Orari);
        }

    }
}

