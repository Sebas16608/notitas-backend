namespace Notitas.DTO
{
    public class NotitaReadFull
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public required string Content { get; set; }
        public int UserId { get; set; }
        public required string Name { get; set; }
    }
}
