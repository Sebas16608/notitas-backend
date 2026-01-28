using Apps.Data;
using Microsoft.EntityFrameworkCore;
using Notitas.Model;
using Users.Model;

var builder = WebApplication.CreateBuilder();

// DATABASE
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlite("Data Source"));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();



if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();

app.MapGet("/", () => "Hola Bienvenido");

app.Run();