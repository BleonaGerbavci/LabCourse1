using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Lab1Rina.Data;
using Lab1Rina.Models;

namespace Lab1Rina.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GarazhaController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public GarazhaController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Garazha>>> Get()
        {
            return Ok(await _context.Garazha.ToListAsync());
        }



        //Get a single Garages by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Garazha>>> Get(int id)
        {
            var garazha = await _context.Garazha.FindAsync(id);
            if (garazha == null)
                return BadRequest("Garazha not found.");
            return Ok(garazha);
        }


        //Create a Garages 
        [HttpPost]
        public async Task<ActionResult<List<Garazha>>> AddGarazha(Garazha garazha)
        {
            _context.Garazha.Add(garazha);
            await _context.SaveChangesAsync();

            return Ok(await _context.Garazha.ToListAsync());
        }

        //Update Garages
        [HttpPut]
        public async Task<ActionResult<Garazha>> UpdateGarazha(Garazha request)
        {
            var dbgarazha = await _context.Garazha.FindAsync(request.Id);
            if (dbgarazha == null)
                return BadRequest("garazha not found");

            dbgarazha.StreetName = request.StreetName;
            dbgarazha.City = request.City;
           



            await _context.SaveChangesAsync();

            return Ok(await _context.Garazha.ToListAsync());
        }

        //Delete a Garages
        [HttpDelete]
        public async Task<ActionResult<List<Garazha>>> DeleteGarazha(int id)
        {
            var dbgarazha = await _context.Garazha.FindAsync(id);
            if (dbgarazha == null)
                return BadRequest("Garazha not found");

            _context.Garazha.Remove(dbgarazha);
            await _context.SaveChangesAsync();

            return Ok(await _context.Garazha.ToListAsync());
        }
    }
}