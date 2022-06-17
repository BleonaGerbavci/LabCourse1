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
        public async Task<ActionResult<List<RentAutobusin>>> Get()
        {
            return Ok(await _context.RentAutobusin.ToListAsync());
        }



        //Get a single Rent by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<RentAutobusin>>> Get(int id)
        {
            var rezervoAutobusin = await _context.RezervoAutobusin.FindAsync(id);
            if (rezervoAutobusin == null)
                return BadRequest("Rent not found.");
            return Ok(rezervoAutobusin);
        }


        //Create a Rent
        [HttpPost("ShtoRent")]
        public async Task<ActionResult<List<RentAutobusin>>> AddRentAutobusin(RentAutobusin rentAutobusin)
        {
            _context.RentAutobusin.Add(rentAutobusin);
            await _context.SaveChangesAsync();

            return Ok(await _context.RentAutobusin.ToListAsync());
        }

        //Update Rent
        [HttpPut("UpdateRent")]
        public async Task<ActionResult<RentAutobusin>> UpdateRentAutobusin(RentAutobusin request)
        {
            var dbrentAutobusin = await _context.RentAutobusin.FindAsync(request.RentId);
            if (dbrentAutobusin == null)
                return BadRequest("Rent not found");

           
            if (!request.PickupDate.Equals(""))
                dbrentAutobusin.PickupDate = request.PickupDate;
            if (!request.DropDate.Equals(""))
                dbrentAutobusin.DropDate = request.DropDate;
            if (!request.Cmimi.Equals(""))
                dbrentAutobusin.Cmimi = request.Cmimi;
            if (!request.UserId.Equals(""))
                dbrentAutobusin.UserId = request.UserId;




            await _context.SaveChangesAsync();

            return Ok(await _context.RentAutobusin.ToListAsync());
        }

        //Delete a Rent
        [HttpDelete("FshijeRent")]
        public async Task<ActionResult<List<RentAutobusin>>> DeleteRentAutobusin(int rentId)
        {
            var dbrentAutobusin = await _context.RentAutobusin.FindAsync(rentId);
            if (dbrentAutobusin == null)
                return BadRequest("Rent not found");

            _context.RentAutobusin.Remove(dbrentAutobusin);
            await _context.SaveChangesAsync();

            return Ok(await _context.RentAutobusin.ToListAsync());
        }
    }
}
