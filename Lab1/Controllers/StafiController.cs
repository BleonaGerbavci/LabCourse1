using Lab1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Lab1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StafiController : ControllerBase
    {

        private static List<Stafi> stafi = new List<Stafi>
            {
                new Stafi{
                    Id = 1,
                    Name = "Bleona",
                    Surname ="Gerbavci",
                    PhoneNumber ="045994258",
                    Email = "bg@gmail.com",
                    Position="CEO",
                    BusId =1,
                    OrariId = 1,
                    KompaniaId=1
                },
                new Stafi{
                    Id = 2,
                    Name = "Rina",
                    Surname ="Shkodra",
                    PhoneNumber ="045124258",
                    Email = "rs@gmail.com",
                    Position="Menaxhere",
                    BusId =1,
                    OrariId = 1,
                    KompaniaId=1
                }
            };

        [HttpGet]
        public async Task<ActionResult<List<Stafi>>> Get()
        {
            return Ok(stafi);
        }

        //Get staff by id
        [HttpGet("{id}")]
        public async Task<ActionResult<Stafi>> Get(int id)
        {
            var stafii = stafi.Find(stafi=>stafi.Id == id);
            if (stafii == null)
                return BadRequest("Staff not found.");
            return Ok(stafii);
        }

        // Add a new Staff

        [HttpPost]
        public async Task<ActionResult<List<Stafi>>> AddStaff(Stafi stafii)
        {
            stafi.Add(stafii);
            return Ok(stafi);
        }

        //Update staff

        [HttpPut]
        public async Task<ActionResult<List<Stafi>>> UpdateStaff(Stafi request)
        {
            var stafii = stafi.Find(stafi => stafi.Id == request.Id);
            if (stafii == null)
                return BadRequest("Staff not found.");

            stafii.Name = request.Name;
            stafii.Surname = request.Surname;
            stafii.PhoneNumber = request.PhoneNumber;
            stafii.Email = request.Email;
            stafii.Position = request.Position;
            stafii.BusId = request.BusId;
            stafii.OrariId = request.OrariId;
            stafii.KompaniaId = request.KompaniaId;

            return Ok(stafi);
        }

        //Delete staff
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Stafi>>> DeleteStaff(int id)
        {
            var stafii = stafi.Find(stafi => stafi.Id == id);
            if (stafii == null)
                return BadRequest("Staff not found.");

            stafi.Remove(stafii);
            return Ok(stafi);
        }




    }
}
