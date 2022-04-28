using System;
using System.Collections.Generic;

namespace Lab1.Models
{
    public partial class Oferta
    {
        public int Id { get; set; }
        public string? Description { get; set; }
        public decimal? Price { get; set; }
        public int? BusId { get; set; }
        public int? KompaniaId { get; set; }

        public virtual Autobusi? Bus { get; set; }
        public virtual Kompania? Kompania { get; set; }
    }
}
