using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Lab1.Data;
using Lab1.Models;

namespace Lab1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StafiController : ControllerBase
    {

        private readonly DB_Bus_SystemContext _context;

        public StafiController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Stafi>>> Get()
        {
            return Ok(await _context.Stafi.ToListAsync());
        }


        //Get staff by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Stafi>>> Get(int id)
        {
            var stafi = await _context.Stafi.FindAsync(id);
            if (stafi == null)
                return BadRequest("Stafi not found!");
            return Ok(stafi);
        }

        // Add a new Staff

        [HttpPost]
        public async Task<ActionResult<List<Stafi>>> AddStafi(Stafi stafi)
        {
            _context.Stafi.Add(stafi);
            await _context.SaveChangesAsync();

            return Ok(await _context.Stafi.ToListAsync());
        }

        //Update staff

        [HttpPut]
        public async Task<ActionResult<Stafi>> UpdateStafi(Stafi request)
        {
            var dbStafi = await _context.Stafi.FindAsync(request.Id);
            if (dbStafi == null)
                return BadRequest("Stafi not found");

            dbStafi.Name = request.Name;
            dbStafi.Surname = request.Surname;
            dbStafi.PhoneNumber = request.PhoneNumber;
            dbStafi.Email = request.Email;
            dbStafi.Position = request.Position;
            dbStafi.BusId = request.BusId;
            dbStafi.OrariId = request.OrariId;
            dbStafi.KompaniaId = request.KompaniaId;

            await _context.SaveChangesAsync();

            return Ok(await _context.Stafi.ToListAsync());
        }

        //Delete staff
        [HttpDelete]
        public async Task<ActionResult<List<Stafi>>> DeleteStafi(int id)
        {
            var dbStafi = await _context.Stafi.FindAsync(id);
            if (dbStafi == null)
                return BadRequest("Stafi not found");

            _context.Stafi.Remove(dbStafi);
            await _context.SaveChangesAsync();

            return Ok(await _context.Stafi.ToListAsync());




        }
    }
}
