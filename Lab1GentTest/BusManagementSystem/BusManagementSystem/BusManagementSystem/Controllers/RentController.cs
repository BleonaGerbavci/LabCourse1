#nullable disable
using Microsoft.AspNetCore.Mvc;
using BusManagementSystem.Data;
using BusManagementSystem.Models;


namespace BusManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public RentController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet("GetRent")]
        public async Task<ActionResult<List<Rent>>> Get()
        {
            return Ok(await _context.Rent.ToListAsync());
        }



        //Get a single Rent by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Rent>>> Get(int id)
        {
            var rent = await _context.Rent.FindAsync(id);
            if (rent == null)
                return BadRequest("Rent not found.");
            return Ok(rent);
        }


        //Create a Rent
        [HttpPost("ShtoRent")]
        public async Task<ActionResult<List<Rent>>> AddRent(Rent rent)
        {
            _context.Rent.Add(rent);
            await _context.SaveChangesAsync();

            return Ok(await _context.Rent.ToListAsync());
        }

        //Update Rent
        [HttpPut("UpdateRent")]
        public async Task<ActionResult<Rent>> UpdateRent(Rent request)
        {
            var dbrent = await _context.Rent.FindAsync(request.Id);
            if (dbrent== null)
                return BadRequest("autobusi not found");

            if (!request.Name.Equals(""))
                dbrent.Name = request.Name;
            if (!request.Surname.Equals(""))
                dbrent.Surname = request.Surname;
            if (!request.Email.Equals(""))
                dbrent.Email = request.Email;
            if (!request.PersonalNumber.Equals(""))
                dbrent.PersonalNumber = request.PersonalNumber;
            if (!request.NumberOfPeople.Equals(""))
                dbrent.NumberOfPeople = request.NumberOfPeople;
            if (!request.PickupDate.Equals(""))
                dbrent.PickupDate = request.PickupDate;
            if (!request.DropDate.Equals(""))
                dbrent.DropDate = request.DropDate;
            if (!request.KompaniaId.Equals(""))
                dbrent.KompaniaId = request.KompaniaId;




            await _context.SaveChangesAsync();

            return Ok(await _context.Rent.ToListAsync());
        }

        //Delete a Rent
        [HttpDelete("FshijeRent")]
        public async Task<ActionResult<List<Rent>>> DeleteRent(int id)
        {
            var dbrent = await _context.Rent.FindAsync(id);
            if (dbrent == null)
                return BadRequest("Rent not found");

            _context.Rent.Remove(dbrent);
            await _context.SaveChangesAsync();

            return Ok(await _context.Rent.ToListAsync());
        }
    }
}

