using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class Kompania
    {
        public Kompania()
        {
            Autobusi = new HashSet<Autobusi>();
            Garazha = new HashSet<Garazha>();
            Linja = new HashSet<Linja>();
            Oferta = new HashSet<Oferta>();
        }

        public int KompaniaId { get; set; }
        public string? Emri { get; set; }
        public string? Emaili { get; set; }
        public string? NrTelefonit { get; set; }
        public string? NrAdreses { get; set; }
        public string? EmriRruges { get; set; }
        public int? ZipCode { get; set; }
        public int? PompaId { get; set; }

        public virtual Pompa? Pompa { get; set; }
        public virtual Qyteti? ZipCodeNavigation { get; set; }
        public virtual ICollection<Autobusi> Autobusi { get; set; }
        public virtual ICollection<Garazha> Garazha { get; set; }
        public virtual ICollection<Linja> Linja { get; set; }
        public virtual ICollection<Oferta> Oferta { get; set; }
    }
}
