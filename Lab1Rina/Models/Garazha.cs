using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class Garazha
    {
        public Garazha()
        {
            Autobusi = new HashSet<Autobusi>();
        }

        public int GarazhaId { get; set; }
        public string? EmriRruges { get; set; }
        public int? ZipCode { get; set; }
        public int? KompaniaId { get; set; }

        public virtual Kompania? Kompania { get; set; }
        public virtual ICollection<Autobusi> Autobusi { get; set; }
    }
}
