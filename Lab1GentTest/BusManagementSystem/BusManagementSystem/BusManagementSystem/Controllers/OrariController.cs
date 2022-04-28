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


        [HttpGet]
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
        [HttpPost]
        public async Task<ActionResult<List<Orari>>> AddKompania(Orari orari)
        {
            _context.Orari.Add(orari);
            await _context.SaveChangesAsync();

            return Ok(await _context.Orari.ToListAsync());
        }

        //Update a Orari
        [HttpPut]
        public async Task<ActionResult<Orari>> UpdateKompania(Orari request)
        {
            var dborari = await _context.Orari.FindAsync(request.Id);
            if (dborari == null)
                return BadRequest("Orari not found");

            dborari.WeekDay = request.WeekDay;
            dborari.StartingHour = request.StartingHour;
            dborari.EndingHour = request.EndingHour;
         
            await _context.SaveChangesAsync();

            return Ok(await _context.Orari.ToListAsync());
        }

        //Delete Orari
        [HttpDelete]
        public async Task<ActionResult<List<Orari>>> DeleteKompania(int id)
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