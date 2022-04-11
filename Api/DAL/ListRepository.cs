using Api.Data;
using Api.Model;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace Api.DAL
{
    public class ListRepository : IListRepository
    {
        private readonly DataContext _context;

        public ListRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List> Delete(int id)
        {
            var list = await _context.Lists.FindAsync(id);
            if (list != null)
            {
                await _context.Database.ExecuteSqlRawAsync("DELETE FROM Lists WHERE Id=@p0", id);
            }
            return list;
        }


        public async Task<IEnumerable<List>> GetAllAsync()
        {
            return await _context.Lists.FromSqlRaw("SELECT * FROM Lists").ToListAsync();
        }

        public async Task<List> GetListByIdAsync(int id)
        {
            var list = await _context.Lists.FromSqlRaw("SELECT * FROM Lists WHERE Id = @p0", id).SingleOrDefaultAsync();
            return list;
        }

        public async Task Insert(List list)
        {
            SqlParameter itemList = new SqlParameter("@ListItem", list.ListItem);
            _context.Lists.Add(list);
            await _context.Database.ExecuteSqlRawAsync("INSERT INTO Lists VALUES (@ListItem)", itemList);
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task Update(int id, List list)
        {
            SqlParameter itemList = new SqlParameter("@ListItem", list.ListItem);
            _context.Entry(list).State = EntityState.Modified;
            await _context.Database.ExecuteSqlRawAsync("UPDATE dbo.Lists SET ListItem=@ListItem WHERE Id = @p0", itemList, id);

        }
    }
}
