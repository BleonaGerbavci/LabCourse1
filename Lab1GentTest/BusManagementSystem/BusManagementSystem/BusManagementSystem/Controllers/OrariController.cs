using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BusManagementSystem.Data;
using BusManagementSystem.Models;

namespace BusManagementSystem.Controllers

{
    [Route("api/[controller]")]
    
    [ApiController]
    public class OrariController : ControllerBase
    {

        private readonly DB_Bus_SystemContext _context;

        public OrariController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet ("GetOraret")]
        public async Task<ActionResult<List<Orari>>> Get()
        {
            return Ok(await _context.Orari.ToListAsync());
        }



        //Get Orari by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Orari>>> Get(int id)
        {
            var orari = await _context.Orari.FindAsync(id);
            if (orari == null)
                return BadRequest("Orari not found.");
            return Ok(orari);
        }


        //Create Orari
        [HttpPost ("ShtoOrarin")]
        public async Task<ActionResult<List<Orari>>> AddOrari(Orari orari)
        {
            _context.Orari.Add(orari);
            await _context.SaveChangesAsync();

            return Ok(await _context.Orari.ToListAsync());
        }

        //Update a Orari
        [HttpPut("UpdateOrarin")]
        public async Task<ActionResult<Orari>> UpdateOrarin(Orari request)
        {
            var dborari = await _context.Orari.FindAsync(request.Id);
            if (dborari == null)
                return BadRequest("Orari not found");

            if(!request.WeekDay.Equals(""))
            dborari.WeekDay = request.WeekDay;
            if(!request.StartingHour.Equals(""))
            dborari.StartingHour = request.StartingHour;
            if(!request.EndingHour.Equals(""))
            dborari.EndingHour= request.EndingHour;
         
            await _context.SaveChangesAsync();

            return Ok(await _context.Orari.ToListAsync());
        }

        //Delete Orari
        [HttpDelete ("FshijeOrarin")]
        public async Task<ActionResult<List<Orari>>> DeleteOrari(int id)
        {
            var dborari = await _context.Orari.FindAsync(id);
            if (dborari == null)
                return BadRequest("Orari not found");

            _context.Orari.Remove(dborari);
            await _context.SaveChangesAsync();

            return Ok(await _context.Orari.ToListAsync());
        }
    }
}