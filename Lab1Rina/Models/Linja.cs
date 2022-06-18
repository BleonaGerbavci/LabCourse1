using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class Linja
    {
        public Linja()
        {
            Oferta = new HashSet<Oferta>();
            Rezervimi = new HashSet<Rezervimi>();
        }

        public int LinjaId { get; set; }
        public string? VendiInisjes { get; set; }
        public string? Destinacioni { get; set; }
        public decimal? Cmimi { get; set; }
        public string? KohaNisjes { get; set; }
        public string? KohaMberritjes { get; set; }
        public string? Kohezgjatja { get; set; }
        public int? AutobusiId { get; set; }
        public int? KompaniaId { get; set; }

        public virtual Autobusi? Autobusi { get; set; }
        public virtual Kompania? Kompania { get; set; }
        public virtual ICollection<Oferta> Oferta { get; set; }
        public virtual ICollection<Rezervimi> Rezervimi { get; set; }
    }
}
