using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing.Constraints;
using Microsoft.EntityFrameworkCore;
using todoapi.Models;

namespace todoapi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TodoController : ControllerBase
  {
    private readonly TestContext _context;

    public TodoController(TestContext context)
    {
      _context = context;
    }

    // GET: api/Todoes
    [Route("getalltodo")]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Todo>>> GetTodos()
    {
      return await _context.Todos.ToListAsync();
    }

    // GET: api/Todoes/5

    [HttpGet("getidbytodo/{id}")]
    public async Task<ActionResult<Todo>> GetTodo(int id)
    {
      var todo   = await _context.Todos.FindAsync(id);

      if (todo == null)
      {
        return NotFound();
      }

      return todo;
    }

    // PUT: api/Todoes/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("updatetodo/{id}")]
    public async Task<IActionResult> PutTodo(int id, Todo todo)
    {
      todo.Updatedate = DateTime.Now;
      if (id != todo.Id)
      {
        return BadRequest();
      }

      _context.Entry(todo).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!TodoExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Todoes
    //[Route("addtodo")]
    [HttpPost("addtodo")]
    public async Task<ActionResult<Todo>> PostTodo(Todo todo)
    {
      _context.Todos.Add(todo);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetTodo", new { id = todo.Id }, todo);
    }

    // DELETE: api/Todoes/5
    [HttpDelete("deletetodo/{id}")]
    public async Task<IActionResult> DeleteTodo(int id)
    {
      var todo = await _context.Todos.FindAsync(id);
      if (todo == null)
      {
        return NotFound();
      }

      _context.Todos.Remove(todo);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool TodoExists(int id)
    {
      return _context.Todos.Any(e => e.Id == id);
    }
  }
}
