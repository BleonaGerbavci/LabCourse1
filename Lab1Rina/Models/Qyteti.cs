using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class Qyteti
    {
        public Qyteti()
        {
            Kompania = new HashSet<Kompania>();
            Pompa = new HashSet<Pompa>();
            Stacioni = new HashSet<Stacioni>();
            Useri = new HashSet<Useri>();
        }

        public int QytetiZipCode { get; set; }
        public string? EmriQytetit { get; set; }

        public virtual ICollection<Kompania> Kompania { get; set; }
        public virtual ICollection<Pompa> Pompa { get; set; }
        public virtual ICollection<Stacioni> Stacioni { get; set; }
        public virtual ICollection<Useri> Useri { get; set; }
    }
}
