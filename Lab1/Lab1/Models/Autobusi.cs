using System;
using System.Collections.Generic;

namespace Lab1.Models
{
    public partial class Autobusi
    {
        public Autobusi()
        {
            Linja = new HashSet<Linja>();
            RezervoAutobusin = new HashSet<RezervoAutobusin>();
        }

        public int AutobusiId { get; set; }
        public int? NrUleseve { get; set; }
        public int? FuelCapacity { get; set; }
        public int? KompaniaId { get; set; }
        public int? StacioniId { get; set; }
        public int? GarazhaId { get; set; }

        public virtual Garazha? Garazha { get; set; }
        public virtual Kompania? Kompania { get; set; }
        public virtual Stacioni? Stacioni { get; set; }
        public virtual ICollection<Linja> Linja { get; set; }
        public virtual ICollection<RezervoAutobusin> RezervoAutobusin { get; set; }
    }
}
