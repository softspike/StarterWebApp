namespace Starter.Data.Models
{
    public class ListItem
    {
    
        public int Id { get; set; }

        public string Name { get; set; }
        
        public string Code { get; set; }


        public static ListItem Get(int id, string name, string code)
        {
            return new ListItem
            {
                Code = code,
                Name = name,
                Id = id
            };

        }
    }
}