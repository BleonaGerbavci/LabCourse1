using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Lab1Rina.Models;
using Lab1Rina.Data;

namespace Lab1Rina.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PompaController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public PompaController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Pompa>>> Get()
        {
            return Ok(await _context.Pompa.ToListAsync());
        }



        //Get a single Garages by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Pompa>>> Get(int id)
        {
            var pompa = await _context.Pompa.FindAsync(id);
            if (pompa == null)
                return BadRequest("Pompa not found.");
            return Ok(pompa);
        }


        //Create a Garages 
        [HttpPost]
        public async Task<ActionResult<List<Pompa>>> AddPompa(Pompa pompa)
        {
            _context.Pompa.Add(pompa);
            await _context.SaveChangesAsync();

            return Ok(await _context.Pompa.ToListAsync());
        }

        //Update Garages
        [HttpPut]
        public async Task<ActionResult<Pompa>> UpdatePompa(Pompa request)
        {
            var dbpompa = await _context.Pompa.FindAsync(request.Id);
            if (dbpompa == null)
                return BadRequest("pompa not found");

            dbpompa.Name = request.Name;
            dbpompa.Adress = request.Adress;




            await _context.SaveChangesAsync();

            return Ok(await _context.Pompa.ToListAsync());
        }

        //Delete a Garages
        [HttpDelete]
        public async Task<ActionResult<List<Pompa>>> DeletePompa(int id)
        {
            var dbpompa = await _context.Pompa.FindAsync(id);
            if (dbpompa == null)
                return BadRequest("Pompa not found");

            _context.Pompa.Remove(dbpompa);
            await _context.SaveChangesAsync();

            return Ok(await _context.Pompa.ToListAsync());
        }
    }
}