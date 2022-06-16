using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Lab1.Data;
using Lab1.Models;


namespace Lab1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public UserController(DB_Bus_SystemContext context)
        {
            _context = context;
        }
       
        [HttpGet("GetAdminet")]
        public async Task<ActionResult<List<Useri>>> GetAdminet()
        {
            return Ok(await _context.Useri.Where(useri => useri.RoliId == 1).ToListAsync());
        }
        [HttpGet("GetShoferet")]
        public async Task<ActionResult<List<Useri>>> GetShoferet()
        {
            return Ok(await _context.Useri.Where(useri => useri.RoliId == 2).ToListAsync());
        }
        [HttpGet("GetKlientet")]
        public async Task<ActionResult<List<Useri>>> GetKlientet()
        {
            return Ok(await _context.Useri.Where(useri => useri.RoliId == 3).ToListAsync());
        }

        //get user by id
        [HttpGet("{UserId}")]
        public async Task<ActionResult<List<Useri>>> Get(int UserId)
        {
            var user = await _context.Useri.FindAsync(UserId);
            if (user == null)
                return BadRequest("Perdoruesi nuk u gjet");
            return Ok(user);
        }


        [HttpPost("AddUsers")]
        public async Task<ActionResult<List<Useri>>> AddUsers(Useri useri)
        {
            if (useri == null)
                return BadRequest("Useri nuk mund te jete i zbrazet!");

            
            _context.Useri.Add(useri);

            await _context.SaveChangesAsync();

            return Ok(await _context.Useri.ToListAsync());
        }


        [HttpPut("UpdateUserin")]
        public async Task<ActionResult<Qyteti>> UpdateUserin(Useri request)
        {
            var dbuseri = await _context.Useri.FindAsync(request.UserId);
            if (dbuseri == null)
                return BadRequest("Useri nuk u gjet.");

            if (request.Emri == null || !request.Emri.Equals(""))
                dbuseri.Emri = request.Emri;

            if (request.Mbiemri == null || !request.Mbiemri.Equals(""))
                dbuseri.Mbiemri = request.Mbiemri;

            if (request.Emaili == null || !request.Emaili.Equals(""))
                dbuseri.Emaili = request.Emaili;

            if (request.Passwordi == null || !request.Passwordi.Equals(""))
                dbuseri.Passwordi = request.Passwordi;

            if (request.NrTelefonit == null || !request.NrTelefonit.Equals(""))
                dbuseri.NrTelefonit = request.NrTelefonit;

            if (request.Emri == null || !request.Emri.Equals(""))
                dbuseri.Emri = request.Emri;

            if (!(request.RoliId <= 0))
                dbuseri.RoliId = request.RoliId;

            if (!(request.ZipCode <= 0))
                dbuseri.ZipCode = request.ZipCode;

            if (request.Orari == null || !request.Orari.Equals(""))
                dbuseri.Orari = request.Orari;

            if(!(request.DitetEpushimit <= 0))
                dbuseri.DitetEpushimit = request.DitetEpushimit;




            await _context.SaveChangesAsync();

            return Ok(await _context.Qyteti.ToListAsync());
        }






        [HttpDelete("FshijUserin")]
        public async Task<ActionResult<List<Useri>>> FshijUserin(int UserId)
        {
            var dbuseri = await _context.Useri.FindAsync(UserId);
            if (dbuseri == null)
                return BadRequest("Useri nuk u gjet");

            _context.Useri.Remove(dbuseri);
            await _context.SaveChangesAsync();

            return Ok(await _context.Useri.ToListAsync());
        }








    }
}
