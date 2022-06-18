using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class Oferta
    {
        public int OfertaId { get; set; }
        public string? Description { get; set; }
        public decimal? Price { get; set; }
        public int? KompaniaId { get; set; }
        public int? LinjaId { get; set; }

        public virtual Kompania? Kompania { get; set; }
        public virtual Linja? Linja { get; set; }
    }
}
