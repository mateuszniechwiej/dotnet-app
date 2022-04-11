using Api.Model;

namespace Api.DAL
{
    public interface IListRepository
    {
        Task Update(int id, List list);
        Task<bool> SaveAllAsync();
        Task Insert(List list);
        Task<IEnumerable<List>> GetAllAsync();
        Task<List> GetListByIdAsync(int id);
        Task<List> Delete(int id);
    }
}
