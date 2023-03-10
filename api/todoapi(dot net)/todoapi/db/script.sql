create database test
go
USE [test]
GO
/****** Object:  Table [dbo].[todo]    Script Date: 12-01-2023 4.23.44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[todo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](max) NULL,
	[descrption] [varchar](max) NULL,
	[isactive] [bit] NULL,
	[createddate] [datetime] NULL,
	[updatedate] [datetime] NULL,
 CONSTRAINT [PK_todo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[todo] ON 

INSERT [dbo].[todo] ([id], [name], [descrption], [isactive], [createddate], [updatedate]) VALUES (1, N'go home', N'it is a descrption', 1, CAST(N'2023-01-12T10:49:10.563' AS DateTime), NULL)
SET IDENTITY_INSERT [dbo].[todo] OFF
GO
