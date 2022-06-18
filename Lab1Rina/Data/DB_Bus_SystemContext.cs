using System;
using System.Collections.Generic;
using Lab1Rina.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Lab1Rina.Data
{
    public partial class DB_Bus_SystemContext : DbContext
    {
        public DB_Bus_SystemContext()
        {
        }

        public DB_Bus_SystemContext(DbContextOptions<DB_Bus_SystemContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Autobusi> Autobusi { get; set; } = null!;
        public virtual DbSet<Garazha> Garazha { get; set; } = null!;
        public virtual DbSet<Kompania> Kompania { get; set; } = null!;
        public virtual DbSet<Linja> Linja { get; set; } = null!;
        public virtual DbSet<Oferta> Oferta { get; set; } = null!;
        public virtual DbSet<Pompa> Pompa { get; set; } = null!;
        public virtual DbSet<Pushimi> Pushimi { get; set; } = null!;
        public virtual DbSet<Qyteti> Qyteti { get; set; } = null!;
        public virtual DbSet<RentAutobusin> RentAutobusin { get; set; } = null!;
        public virtual DbSet<Rezervimi> Rezervimi { get; set; } = null!;
        public virtual DbSet<RezervoAutobusin> RezervoAutobusin { get; set; } = null!;
        public virtual DbSet<Roli> Roli { get; set; } = null!;
        public virtual DbSet<Stacioni> Stacioni { get; set; } = null!;
        public virtual DbSet<Useri> Useri { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=localhost;Database=DB_Bus_System;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Autobusi>(entity =>
            {
                entity.HasOne(d => d.Garazha)
                    .WithMany(p => p.Autobusi)
                    .HasForeignKey(d => d.GarazhaId)
                    .HasConstraintName("FK__Autobusi__Garazh__5EBF139D");

                entity.HasOne(d => d.Kompania)
                    .WithMany(p => p.Autobusi)
                    .HasForeignKey(d => d.KompaniaId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Autobusi__Kompan__5CD6CB2B");

                entity.HasOne(d => d.Stacioni)
                    .WithMany(p => p.Autobusi)
                    .HasForeignKey(d => d.StacioniId)
                    .HasConstraintName("FK__Autobusi__Stacio__5DCAEF64");
            });

            modelBuilder.Entity<Garazha>(entity =>
            {
                entity.Property(e => e.EmriRruges)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Kompania)
                    .WithMany(p => p.Garazha)
                    .HasForeignKey(d => d.KompaniaId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Garazha__Kompani__59FA5E80");
            });

            modelBuilder.Entity<Kompania>(entity =>
            {
                entity.Property(e => e.Emaili)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Emri)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.EmriRruges)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.NrAdreses)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.NrTelefonit)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Pompa)
                    .WithMany(p => p.Kompania)
                    .HasForeignKey(d => d.PompaId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Kompania__PompaI__5629CD9C");

                entity.HasOne(d => d.ZipCodeNavigation)
                    .WithMany(p => p.Kompania)
                    .HasForeignKey(d => d.ZipCode)
                    .HasConstraintName("FK__Kompania__ZipCod__5535A963");
            });

            modelBuilder.Entity<Linja>(entity =>
            {
                entity.Property(e => e.Cmimi).HasColumnType("decimal(5, 2)");

                entity.Property(e => e.Destinacioni)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.KohaMberritjes)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.KohaNisjes)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Kohezgjatja)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.VendiInisjes)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("VendiINisjes");

                entity.HasOne(d => d.Autobusi)
                    .WithMany(p => p.Linja)
                    .HasForeignKey(d => d.AutobusiId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Linja__AutobusiI__628FA481");

                entity.HasOne(d => d.Kompania)
                    .WithMany(p => p.Linja)
                    .HasForeignKey(d => d.KompaniaId)
                    .HasConstraintName("FK__Linja__KompaniaI__6383C8BA");
            });

            modelBuilder.Entity<Oferta>(entity =>
            {
                entity.Property(e => e.Description)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.LinjaId).HasColumnName("Linja_Id");

                entity.Property(e => e.Price).HasColumnType("decimal(5, 2)");

                entity.HasOne(d => d.Kompania)
                    .WithMany(p => p.Oferta)
                    .HasForeignKey(d => d.KompaniaId)
                    .HasConstraintName("FK__Oferta__Kompania__6754599E");

                entity.HasOne(d => d.Linja)
                    .WithMany(p => p.Oferta)
                    .HasForeignKey(d => d.LinjaId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Oferta__Linja_Id__68487DD7");
            });

            modelBuilder.Entity<Pompa>(entity =>
            {
                entity.Property(e => e.Emri)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.EmriRruges)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.ZipCodeNavigation)
                    .WithMany(p => p.Pompa)
                    .HasForeignKey(d => d.ZipCode)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Pompa__ZipCode__2D27B809");
            });

            modelBuilder.Entity<Pushimi>(entity =>
            {
                entity.Property(e => e.DataFilimit)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.DataMbarimit)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Pushimi)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Pushimi__UserID__403A8C7D");
            });

            modelBuilder.Entity<Qyteti>(entity =>
            {
                entity.HasKey(e => e.QytetiZipCode)
                    .HasName("PK__Qyteti__5EC276388E66ACEA");

                entity.Property(e => e.QytetiZipCode).ValueGeneratedNever();

                entity.Property(e => e.EmriQytetit)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<RentAutobusin>(entity =>
            {
                entity.HasKey(e => e.RentId)
                    .HasName("PK__RentAuto__783D47F588F627D3");

                entity.Property(e => e.Cmimi).HasColumnType("decimal(5, 2)");

                entity.Property(e => e.DropDate)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PickupDate)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.RentAutobusin)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__RentAutob__UserI__49C3F6B7");
            });

            modelBuilder.Entity<Rezervimi>(entity =>
            {
                entity.Property(e => e.Emaili)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Emri)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.LinjaId).HasColumnName("Linja_Id");

                entity.Property(e => e.Mbiemri)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.NrTelefonit)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Linja)
                    .WithMany(p => p.Rezervimi)
                    .HasForeignKey(d => d.LinjaId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Rezervimi__Linja__6C190EBB");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Rezervimi)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Rezervimi__UserI__6B24EA82");
            });

            modelBuilder.Entity<RezervoAutobusin>(entity =>
            {
                entity.HasKey(e => e.RezervimiId)
                    .HasName("PK__RezervoA__6F6B8C2B4E84F59A");

                entity.Property(e => e.RezervimiId).HasColumnName("RezervimiID");

                entity.Property(e => e.DataKthimit)
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.DataRezervimit)
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Autobusi)
                    .WithMany(p => p.RezervoAutobusin)
                    .HasForeignKey(d => d.AutobusiId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__RezervoAu__Autob__70DDC3D8");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.RezervoAutobusin)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__RezervoAu__UserI__6FE99F9F");
            });

            modelBuilder.Entity<Roli>(entity =>
            {
                entity.Property(e => e.EmriRolit)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Stacioni>(entity =>
            {
                entity.Property(e => e.EmriRruges)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.ZipCodeNavigation)
                    .WithMany(p => p.Stacioni)
                    .HasForeignKey(d => d.ZipCode)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Stacioni__ZipCod__37A5467C");
            });

            modelBuilder.Entity<Useri>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__Useri__1788CC4CB063A34A");

                entity.HasIndex(e => e.Emaili, "UQ__Useri__456F8D02199B6AB1")
                    .IsUnique();

                entity.Property(e => e.DitetEpushimit).HasColumnName("DitetEPushimit");

                entity.Property(e => e.Emaili)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Emri)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Mbiemri)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.NrTelefonit)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Orari)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Passwordi)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Roli)
                    .WithMany(p => p.Useri)
                    .HasForeignKey(d => d.RoliId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Useri__RoliId__29572725");

                entity.HasOne(d => d.ZipCodeNavigation)
                    .WithMany(p => p.Useri)
                    .HasForeignKey(d => d.ZipCode)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Useri__ZipCode__2A4B4B5E");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
