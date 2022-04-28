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
    public class KompaniaController : ControllerBase
    {

        private readonly DB_Bus_SystemContext _context;

        public KompaniaController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Kompania>>> Get()
        {
            return Ok(await _context.Kompania.ToListAsync());
        }



        //Get a single Company by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Kompania>>> Get(int id)
        {
            var kompania = await _context.Kompania.FindAsync(id);
            if (kompania == null)
                return BadRequest("Kompania not found.");
            return Ok(kompania);
        }


        //Create a Company 
        [HttpPost]
        public async Task<ActionResult<List<Kompania>>> AddKompania(Kompania kompania)
        {
            _context.Kompania.Add(kompania);
            await _context.SaveChangesAsync();

            return Ok(await _context.Kompania.ToListAsync());
        }

        //Update a Company
        [HttpPut]
        public async Task<ActionResult<Kompania>> UpdateKompania(Kompania request)
        {
            var dbkompania = await _context.Kompania.FindAsync(request.Id);
            if (dbkompania == null)
                return BadRequest("Kompania not found");

            dbkompania.Name = request.Name;
            dbkompania.Adress = request.Adress;
            dbkompania.City = request.City;
            dbkompania.Email = request.Email;
            dbkompania.ContactNumber = request.ContactNumber;

            await _context.SaveChangesAsync();

            return Ok(await _context.Kompania.ToListAsync());
        }

        //Delete a Company
        [HttpDelete]
        public async Task<ActionResult<List<Kompania>>> DeleteKompania(int id)
        {
            var dbkompania = await _context.Kompania.FindAsync(id);
            if (dbkompania == null)
                return BadRequest("Kompania not found");

            _context.Kompania.Remove(dbkompania);
            await _context.SaveChangesAsync();

            return Ok(await _context.Kompania.ToListAsync());
        }
    }
}




