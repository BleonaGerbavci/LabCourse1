using System;
using System.Collections.Generic;

namespace Lab1.Models
{
    public partial class Kompania
    {
        public Kompania()
        {
            Autobusi = new HashSet<Autobusi>();
            Oferta = new HashSet<Oferta>();
            Rent = new HashSet<Rent>();
            Stafi = new HashSet<Stafi>();
        }

        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Adress { get; set; }
        public string City { get; set; } = null!;
        public string? Email { get; set; }
        public string? ContactNumber { get; set; }

        public virtual ICollection<Autobusi> Autobusi { get; set; }
        public virtual ICollection<Oferta> Oferta { get; set; }
        public virtual ICollection<Rent> Rent { get; set; }
        public virtual ICollection<Stafi> Stafi { get; set; }
    }
}
