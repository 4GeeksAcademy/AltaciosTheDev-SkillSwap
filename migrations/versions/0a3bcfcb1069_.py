"""empty message

Revision ID: 0a3bcfcb1069
Revises: 2f4ada5788e3
Create Date: 2024-04-24 19:01:19.755874

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0a3bcfcb1069'
down_revision = '2f4ada5788e3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user__skill__association',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('level', sa.String(length=80), nullable=False),
    sa.Column('role', sa.String(length=80), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('skill_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['skill_id'], ['skill.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user__skill__association')
    # ### end Alembic commands ###