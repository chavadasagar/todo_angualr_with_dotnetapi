using System;
using System.Collections.Generic;

namespace todoapi.Models;

public partial class Todo
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Descrption { get; set; }

    public bool Isactive { get; set; }

    public DateTime? Createddate { get; set; }

    public DateTime? Updatedate { get; set; }
}
